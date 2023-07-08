import { AppResponse } from '../../application/models/app.response'
import { Router } from 'express'
// services
import characterService from './services/character.service'
// utils
import { PaginateResult, Document } from 'mongoose'
// dtos
import { ICharacterInfoDto } from './services/dtos/character-info.dto'

export const characterController = async ({ api, router }: { api: string; router: Router }) => {
  const route = `${api}/characters`

  router
    .get(`${route}/getAllCharacters`, async (req, res) => {
      const result = new AppResponse<PaginateResult<Document<any, any, any>>>()
      try {
        result.response = await characterService.getAllCharacters()

        return res.status(200).json(result)
      } catch (err) {
        result.message = String(err)

        return res.status(500).json(result)
      }
    })

    .get(`${route}/getCharacterById/:id`, async (req, res) => {
      const result = new AppResponse<Document<ICharacterInfoDto>>()
      console.log("hola")
      const { id } = req.params

      try {
        result.response = await characterService.getCharacterById(id)

        return res.status(200).json(result)
      } catch (err) {
        result.message = String(err)

        return res.status(500).json(result)
      }
    })
}
