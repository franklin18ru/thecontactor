import * as FileSystem from 'expo-file-system';
import * as uuid from 'uuid';
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
        phoneNumbers = arr[0];
    }
    else{
        phoneNumbers = data.phoneNumbers;
    }
    
    const contact = {
        'name': data.name,
        'image': 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/67152750_341237676815845_316865137862508544_n.png?_nc_cat=102&_nc_ohc=unbiXO7fSIoAQmUbarMWkY0eepG5OcIfjOoku3_-5TJr3IPRnxv8LxuVA&_nc_ht=scontent-arn2-1.xx&oh=e4033d407633acccb00357511d074486&oe=5E408845',
        'phoneNumber': phoneNumbers

    };
    await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact), { encoding: FileSystem.EncodingType.UTF8 });
}

export const addNewContact = async (data) => {
    const key = uuid.v1();

    const fileName = contactDirectory+'/'+data.name+'-'+key+'.json';
    if(data.image == ''){data.image = 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/67152750_341237676815845_316865137862508544_n.png?_nc_cat=102&_nc_ohc=unbiXO7fSIoAQmUbarMWkY0eepG5OcIfjOoku3_-5TJr3IPRnxv8LxuVA&_nc_ht=scontent-arn2-1.xx&oh=e4033d407633acccb00357511d074486&oe=5E408845'}
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

