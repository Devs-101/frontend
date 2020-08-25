import { config } from 'dotenv'
import { configure } from 'enzyme'
import fetchMock from 'jest-fetch-mock'
import Adapter from 'enzyme-adapter-react-16'
import '@babel/polyfill'
import 'mutationobserver-shim'

config()
fetchMock.enableMocks()
configure({ adapter: new Adapter() })
