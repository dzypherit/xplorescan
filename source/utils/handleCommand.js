import address from '../commands/address.js';
import openURL from './handleOpenURL.js';

/**
 * @param {string} command
 * @param {string} chain
 * @param {string} input
 * @param {object} flags
 * @description Handle the command and call the function for the specific command.
 */
const handleCommand = (command, chain, input, flags) => {
  if (command === 'address' || command === 'contract') {
    const url = address(chain, input, flags);
    openURL(url);
  } else {
    console.error('[xplorescan] Command not found. Please use "xplorescan --help" to see the available commands.');
  }
};

export default handleCommand;