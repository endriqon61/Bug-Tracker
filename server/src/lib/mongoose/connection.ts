import m from 'mongoose'


const connection = async(url: string): Promise<void> => {
    await m.connect(url);
}

export default connection;