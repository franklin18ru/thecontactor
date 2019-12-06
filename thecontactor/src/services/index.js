import * as FileSystem from 'expo-file-system';
import * as uuid from 'uuid';
import * as anon from '../resources/image/anon.png';
// Directory that holds all the contacts to the system
const contactDirectory = `${FileSystem.documentDirectory}contacts`;

// ADD DATA //

export const addContact = async (data) => {
    const fileName = contactDirectory+'/'+data.name+'.json';
    var phoneNumbers;
    if(data.phoneNumbers != undefined){
        var arr = [];
        data.phoneNumbers.map(phone =>{
            arr.push(phone.number)
        });
        // FIX IF YOU WANT ALL PHONE NUMBERS
        phoneNumbers = arr[0];
    }
    else{
        phoneNumbers = data.phoneNumbers;
    }
    
    const contact = {
        'name': data.name,
        'image': 'https://www.northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png',
        'phoneNumber': phoneNumbers

    };
    await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact), { encoding: FileSystem.EncodingType.UTF8 });
}

export const addNewContact = async (data) => {
    // ADD UUID HERE
    const key = uuid.v1();

    const fileName = contactDirectory+'/'+data.name+'-'+key+'.json';
    if(data.image == ''){data.image = 'https://www.northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png'}
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
        const data = JSON.parse(await loadData(fileName));
        return {
            'name': data.name,
            'image': data.image,
            'phoneNumber': data.phoneNumber,
            'file': fileName
        }
    }));
};


// DELETE DATA

export const DeleteContact = async (fileName) => {
    await FileSystem.deleteAsync(`${contactDirectory}/${fileName}`, { idempotent: true });
}

// Very dangerous, this like the movie Hackers
export const DeleteAllContact = async () => {
    await setupDirectory();
    const result = await FileSystem.readDirectoryAsync(contactDirectory);
    return Promise.all(result.map(async (fileName) => {
        await DeleteContact(fileName);
        
    }));
};

