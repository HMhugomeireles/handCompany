import Uuidv5 from 'uuid/v5'

export const GenUid = () => {
  const value = new Date().getTime();
  return Uuidv5(value.toString(), Uuidv5.DNS)
};

