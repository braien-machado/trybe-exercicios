interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character: Character): Promise<DbCharacter>,
  update(id: number, character: Character): Promise<DbCharacter>,
  delete(id: number): Promise<boolean>,
  getAll(): Promise<DbCharacter[]>,
  getById(id: number): Promise<DbCharacter>,
}

class LocalDbModel implements IModel {
  async create(character: Character) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  async update(id: number, character: Character) {
    const idToUpdate = db.findIndex((character) => character.id === id);
    if (idToUpdate < 0) throw new Error('Character not found');

    db[idToUpdate] = { ...db[idToUpdate], ...character };
    return db[idToUpdate];
  };

  async delete(id: number) {
    const idToDelete = db.findIndex((character) => character.id === id);
    if (idToDelete < 0) throw new Error('Character not found');

    const deletedItem = db.splice(idToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  async getAll() {
    return db;
  }

  async getById(id: number) {
    const idToGet = db.findIndex((character) => character.id === id);
    if (idToGet < 0) throw new Error('Character not found');
    return db[idToGet];
  }
}

class CharacterService {
  constructor(readonly model: IModel) { }
  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  async getById(id: number) {
    const character = await this.model.getById(id);
    return ({ status: 200, data: character });
  }

  async update(id: number, character: Character) {
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter });
  }

  async delete(id: number) {
    const deleted = await this.model.delete(id);
    return ({ status: 200, deleted });
  }
}

class MockedDbModel implements IModel {
  async create(character: Character) {
    console.log('character created')
    return ({ id: 1, name: 'Peach', specialMove: 'Toad' });
  }

  async getAll() {
    return [{ id: 1, name: 'Peach', specialMove: 'Toad' }];
  }

  async getById(id: number) {
    return ({ id: 1, name: 'Peach', specialMove: 'Toad' });
  }

  async update(id: number, character: Character) {
    console.log('character updated')
    return ({ id: 1, name: 'Yoshi', specialMove: 'Egg Lay' });
  }

  async delete(id: number) {
    console.log('character deleted')
    return true;
  }
}

const A = new CharacterService(new LocalDbModel());
const B = new CharacterService(new MockedDbModel());