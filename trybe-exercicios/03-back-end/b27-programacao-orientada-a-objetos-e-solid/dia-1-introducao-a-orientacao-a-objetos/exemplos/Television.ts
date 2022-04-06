class Television {
  private _connectedTo!: string;

  constructor(
    private _brand: string,
    private _size: number,
    private _resolution: number,
    private _connections: string[],
  ) {}

  turnOn() {
    const { _brand, _size, _resolution, _connections } = this;
    console.log(_brand, _size, _resolution, _connections);
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.some((connection) => connection === value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable');
    }
  }
}

const tv1 = new Television('samsung', 40, 1080, ['hdmi', 'vga', 'ethernet', 'usb']);

tv1.turnOn();
console.log(tv1.connectedTo);
tv1.connectedTo = 'hdmi';
console.log(tv1.connectedTo);
tv1.connectedTo = 'hd';
console.log(tv1.connectedTo);