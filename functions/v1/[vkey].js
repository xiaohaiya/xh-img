async function encrypt(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const iv = crypto.getRandomValues(new Uint8Array(12));

    const encrypted = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        key,
        data
    );

    const ivHex = Array.from(iv).map(b => b.toString(16).padStart(2, '0')).join('');
    const encryptedHex = Array.from(new Uint8Array(encrypted)).map(b => b.toString(16).padStart(2, '0')).join('');

    return {
        iv: ivHex,
        encryptedData: encryptedHex
    };
}

async function decrypt(encryptedData, iv, key) {
    const decoder = new TextDecoder();
    const ivArray = new Uint8Array(iv.match(/.{2}/g).map(byte => parseInt(byte, 16)));
    const encryptedArray = new Uint8Array(encryptedData.match(/.{2}/g).map(byte => parseInt(byte, 16)));

    const decrypted = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: ivArray
        },
        key,
        encryptedArray
    );

    return decoder.decode(decrypted);
}

// 使用示例
async function main() {
    const key = await crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"]
    );

    const text = "Hello, World!";

    const encrypted = await encrypt(text, key);
    console.log("Encrypted:", encrypted);

    const decrypted = await decrypt(encrypted.encryptedData, encrypted.iv, key);
    console.log("Decrypted:", decrypted);
}

export async function onRequestGet({ request }) {
  const { url, method, headers, body } = request;
  const newUrl = new URL(url);
  const key = await crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"]
    );

    const text = "Hello, World!";

    const encrypted = await encrypt(text, key);
    console.log("Encrypted:", encrypted);

    const decrypted = await decrypt(encrypted.encryptedData, encrypted.iv, key);
    console.log("Decrypted:", decrypted);
}
