// 5. Compare dois objetos para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('comparando objetos', () => {
  it('compara ob1 e obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('compara ob1 e obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('compara ob2 e obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});