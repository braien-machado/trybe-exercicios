// export default function progressNotification(
//   message: string,
//   notificationType: string
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message)
//       break;
//   }
// };

type NotificationType = {
  type: string,
  send: (message: string) => void,
}

const consoleNotification: NotificationType = {
  type: "Console",
  send: function(message) {
    console.log('Console: ', message);
  }
};

const emailNotification: NotificationType = {
  type: "Email",
  send: function(message) {
    console.log('Email: ', message);
  }
};

const phoneNotification: NotificationType = {
  type: "Phone",
  send: function(message) {
    console.log('Phone: ', message);
  }
};

const notifications: NotificationType[] = [
  consoleNotification, emailNotification, phoneNotification
];

export default function progressNotification(
  message: string,
  type: string = 'Console',
  notificationsArray: NotificationType[] = notifications
): void {
  notificationsArray.forEach(notification => {
    if (notification.type === type) {
      notification.send(message);
    }
  })
};