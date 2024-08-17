let timezones = ['Asia/Rangoon', 'America/New_York', 'Etc/GMT+0'];

let updatedTimezones = timezones.map(getUpdatedTimezone);

console.log(updatedTimezones);
// Output: ['Asia/Yangon', 'America/New_York', 'Etc/UTC']
