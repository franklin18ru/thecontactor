import * as FileSystem from 'expo-file-system';

// Directory that holds all the contracts to the system
const contactDirectory = `${FileSystem.documentDirectory}contacts`;


const loadContact = async (fileName) => {
    return await FileSystem.readAsStringAsync(
        `${fileName}`,
        {encoding: FileSystem.EncodingType.UTF8}
    );
};

export const loadData = async (path) => {
    return await FileSystem.readAsStringAsync(path, {encoding: FileSystem.EncodingType.UTF8});
}

export const addContact = async (data) => {
    const fileName = contactDirectory+"/"+data.name+".json";
    await FileSystem.writeAsStringAsync(fileName, data, { encoding: FileSystem.EncodingType.UTF8 });
    
    // const asset = await MediaLibrary.createAssetAsync(fileUri)
    // await MediaLibrary.createAlbumAsync("Download", asset, false)
    // return {
    //     name: fileName
    // }
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }
};

export const getAllContacts = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await FileSystem.readDirectoryAsync(contactDirectory);
    return Promise.all(result.map(async (fileName) => {
        return {
            name: fileName
        };
    }));
};




// HOW TO USE

// async addContact(contactLocation) {
//     const newContact = await addContact(contactLocation)
// }