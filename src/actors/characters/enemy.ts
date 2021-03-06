import { Character } from "./character"
import { Engine } from "excalibur";
import { AssetLoader } from "../../loader/loader";



export class Enemy extends Character {

  //#region Lifecycle

  constructor() {
    super({ spriteSheet: AssetLoader.getById('enemy') });
  }

  /**
   * Initializes the enemy
   * @param engine The engine object
   */
  public onInitialize(engine: Engine) {
    super.onInitialize(engine);
    console.log('Initializing the enemy...');
  }

  //#endregion

}