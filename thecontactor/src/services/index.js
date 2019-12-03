import * as FileSystem from 'expo-file-system';

// Directory that holds all the contracts to the system
const contactDirectory = `${FileSystem.documentDirectory}contracts`;

export const copyFile = async (file, newLocation) =>{
    return FileSystem.copyAsync({
        from: file,
        to: newLocation
    });
};

const loadContact = async (fileName) => {
    return FileSystem.readAsStringAsync(
        `${contactDirectory}/${fileName}`,
        {encoding: FileSystem.EncodingType.Base64}
    );
};

export const addContact = async (contactLocation) => {
    const folderSplit = contactLocation.split('/');
    const fileName = folderSplit[folderSplit.length-1];
    await copyFile(contactLocation, `${contactLocation}/${fileName}`)

    return {
        name: fileName,
        file: await loadContact(fileName)
    }
}




// HOW TO USE

// async addContact(contactLocation) {
//     const newContact = await addContact(contactLocation)
// }