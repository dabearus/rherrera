const { google } = require('googleapis');

const sheetId = process.env.GOOGLE_SHEET_ID;

function getPrivateKey() {
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!rawKey) return undefined;
  return rawKey.replace(/\\n/g, '\n');
}

function getAuthClient() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: getPrivateKey(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
}

function getSheetsClient() {
  const auth = getAuthClient();
  return google.sheets({ version: 'v4', auth });
}

async function readRows(range) {
  const sheets = getSheetsClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range
  });

  return response.data.values || [];
}

async function appendRow(range, row) {
  const sheets = getSheetsClient();
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row]
    }
  });

  return response.data;
}

function rowsToObjects(rows) {
  const [headers, ...dataRows] = rows;
  if (!headers) return [];

  return dataRows.map((row) => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = row[index] || '';
    });
    return item;
  });
}

module.exports = {
  readRows,
  appendRow,
  rowsToObjects
};
