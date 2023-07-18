// schemas
import Character from '../../../application/repositories/schemas/Character'
// dtos
import { ICharacterInfoDto } from './dtos/character-info.dto'
// utils
import { PaginateResult, Document } from 'mongoose'

class CharacterService {
  async getAllCharacters (): Promise<PaginateResult<Document<any, any, any>>> {
    const options = {
      page: 1,
      limit: 10
    }
    const res = await Character.paginate({}, options)
    if (res.docs.length === 0) throw new Error('Aún no hay cuentas en la base de datos')

    return res
  }

  async getCharacterById (id:string): Promise<Document<ICharacterInfoDto>> {
    const res = await Character.findById(id).exec()

    if (!res) throw new Error('Aún no hay cuentas en la base de datos')

    return res
  }

  async createCharacter (character: ICharacterInfoDto) {
    const res = await Character.create(character)
    return res
  }
}

export default new CharacterService()
