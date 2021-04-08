import Realm from 'realm';

const Employee = {
  name: 'User_Data',
  properties: {
    Emp_id: 'int',
    Emp_name: 'string',
    Emp_desg: 'string',
    Emp_sal: 'int',
  },
  primaryKey: 'Emp_id',
};

let realm = new Realm({schema: [Employee], schemaVersion: 1});

let getEmployee = () => {
  return realm.objects('User_Data');
};

let addEmployee = (Emp_id, Emp_name, Emp_desg, Emp_sal) => {
  realm.write(() => {
    const task1 = realm.create('User_Data', {
      Emp_id: Number(Emp_id),
      Emp_name: Emp_name,
      Emp_desg: Emp_desg,
      Emp_sal: Number(Emp_sal),
    });
  });
};

let searchEmployee = (name) => {
  const EmpData = realm.objects('User_Data');
  return EmpData.filtered(`Emp_name CONTAINS[c]'${name}'`);
};

let sortEmployeeAsc = (order) => {
  const EmpData = realm.objects('User_Data');
  return EmpData.sorted('Emp_sal');
};
let sortEmployeeDsc = (order) => {
  const EmpData = realm.objects('User_Data');
  return EmpData.sorted('Emp_sal', true);
};
let deleteEmployee = () => {
  realm.write(() => {
    realm.deleteAll();
  });
};
export {
  getEmployee,
  addEmployee,
  sortEmployeeAsc,
  sortEmployeeDsc,
  searchEmployee,
  deleteEmployee,
};
