import { Schema, Document } from 'mongoose'

export interface ICharacterInfoDto extends Document {
  apiID?: number;
  name: string;
  img?: string;
  status: string;
  species?: string;
  gender?: string;
  origin: {
    id?: Schema.Types.ObjectId;
    name?: string;
  };
  location: {
    id?: Schema.Types.ObjectId;
    name?: string;
  };
  episodes: object[];
}
