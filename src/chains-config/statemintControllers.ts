import { ControllerConfig } from '../types/chains-config';
import { initLRUCache } from './cache/lruCache';

/**
 * Statemint configuration for Sidecar.
 */
export const statemintControllers: ControllerConfig = {
	controllers: [
		'AccountsAssets',
		'AccountsValidate',
		'Blocks',
		'BlocksExtrinsics',
		'NodeNetwork',
		'NodeTransactionPool',
		'NodeVersion',
		'PalletsAssets',
		'RuntimeCode',
		'RuntimeMetadata',
		'RuntimeSpec',
		'TransactionDryRun',
		'TransactionFeeEstimate',
		'TransactionMaterial',
		'TransactionSubmit',
		'TransactionCompose',
	],
	options: {
		finalizes: true,
		minCalcFeeRuntime: 601,
		blockStore: initLRUCache(),
	},
};
