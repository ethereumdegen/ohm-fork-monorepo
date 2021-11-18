import { Contract, Signer, BigNumber as BN } from 'ethers'
import * as hre from 'hardhat'
import { SimpleERC20, Factory } from '../types/typechain'
import { use, should } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { solidity } from 'ethereum-waffle'
import { deploy } from '../utils/deploy-helpers'
import {setup} from './helpers/setup'

use(chaiAsPromised)
use(solidity)
should()
 

describe('SimpleERC20', function () {
  let erc20Contract: SimpleERC20
  let factoryContract: Factory
  let user: Signer
  let filler: Signer
   

  beforeEach(async () => {
    const result = await setup()
    erc20Contract = result.simpleErc20
    factoryContract = result.factory
    
    user = result.user
   
  })

    
  

  describe('SimpleERC20', () => {
    it('should have the contract address set', async () => {
      const wethAddr = erc20Contract.address
      wethAddr.should.exist
    })
  })
  describe('Factory', () => {
    it('should have the contract address set', async () => {
      const factoryAddr = factoryContract.address
      factoryAddr.should.exist
    })

    it('should be able to deploy proxy', async () => {
      let inputData = 0;

      let result = await factoryContract.createChild( 'name', 'lll' )//.send({from: await user.getAddress()})

      console.log('result',result)
    })
  })

   
 
})
