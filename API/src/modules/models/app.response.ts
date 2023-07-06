export class AppResponse<T> {
  public message = 'success'
  public response?: T

  constructor(init?: Partial<AppResponse<T>>) {
    Object.assign(this, init)
  }
}