import { InlineKeyboard } from "grammy";

const generateFolderKeyboard = (folders: any[]) => {
    const keyboard = new InlineKeyboard();

    folders.forEach((folderItem: any) => {
        const folderValue: any = folderItem.dataValues;
        keyboard.text(folderValue.name, `subscribe_folder_${folderValue.id}`).row();
    });

    return keyboard;
}

export default generateFolderKeyboard;