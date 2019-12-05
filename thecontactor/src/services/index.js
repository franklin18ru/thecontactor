import * as FileSystem from 'expo-file-system';
// Directory that holds all the contacts to the system
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

// ADD DATA //

export const addContact = async (data) => {
    const fileName = contactDirectory+"/"+data.name+".json";
    // TODO
    // how the data from phone should come in
    // name 
    // photo 
    // phone number
    await FileSystem.writeAsStringAsync(fileName, JSON.stringify(data), { encoding: FileSystem.EncodingType.UTF8 });
}

// GET DATA //

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }
};

export const loadData = async (fileName) => {
    return await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {encoding: FileSystem.EncodingType.UTF8});
}

export const getAllContacts = async () => {
    // Check if directory exists
    await setupDirectory();
    const result = await FileSystem.readDirectoryAsync(contactDirectory);
    return Promise.all(result.map(async (fileName) => {
        return {
            'name': fileName,
            'Contact': JSON.parse(await loadData(fileName))
        }
    }));
};




