/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    /** NODE 内置环境变量, 会影响到最终构建生成产物 */
    NODE_ENV: 'development' | 'production',
    /** 当前构建的平台 */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    /**
     * 当前构建的小程序 appid
     * @description 若不同环境有不同的小程序，可通过在 env 文件中配置环境变量`TARO_APP_ID`来方便快速切换 appid， 而不必手动去修改 dist/project.config.json 文件
     * @see https://taro-docs.jd.com/docs/next/env-mode-config#特殊环境变量-taro_app_id
     */
    TARO_APP_ID: string
  }
}

interface IAp {
	alipayVersion: string;
	alert: () => void;
	alipayVersion: string;
	allowBack: () => void;
	allowPullDownRefresh: (allow: boolean) => void;
	call: () => void;
	cancelRecord: () => void;
	chooseAlipayContact: () => void;
	chooseCity: () => void;
	chooseImage: () => void;
	choosePhoneContact: () => void;
	chooseVideo: () => void;
	closeBluetoothAdapter: () => void;
	closeSocket: () => void;
	compareVersion: (e: string) => void;
	compressImage: () => void;
	confirm: () => void;
	connectBLEDevice: () => void;
	connectSocket: () => void;
	datePicker: () => void;
	disconnectBLEDevice: () => void;
	downloadFile: () => void;
	enableDebug: () => void;
	extendJSAPI: (o: any, r: any) => void;
	getAuthCode: (any, any) => void;
	getAuthUserInfo: () => void;
	getBLEDeviceCharacteristics: () => void;
	getBLEDeviceServices: () => void;
	getBackgroundAudioPlayerState: () => void;
	getBluetoothAdapterState: () => void;
	getBluetoothDevices: () => void;
	getConnectedBluetoothDevices: () => void;
	getLaunchParams: () => void;
	getLocation: () => void;
	getNetworkType: () => void;
	getServerTime: () => void;
	getSessionData: () => void;
	getSystemInfo: () => void;
	hideBackButton: () => void;
	hideLoading: () => void;
	hideNavigationBarLoading: () => void;
	hideOptionButton: () => void;
	hideToast: () => void;
	isAlipay: boolean;
	makePhoneCall: () => void;
	notifyBLECharacteristicValueChange: () => void;
	off: (e: string, t: Function) => void;
	offAccelerometerChange: () => void;
	offAppPause: () => void;
	offAppResume: () => void;
	offBLECharacteristicValueChange: () => void;
	offBLEConnectionStateChanged: () => void;
	offBack: () => void;
	offBackgroundAudioPause: () => void;
	offBackgroundAudioPlay: () => void;
	offBackgroundAudioStop: () => void;
	offBluetoothAdapterStateChange: () => void;
	offBluetoothDeviceFound: () => void;
	offCompassChange: () => void;
	offNetworkChange: () => void;
	offPagePause: () => void;
	offPageResume: () => void;
	offPause: () => void;
	offPullDownRefresh: (callback: () => void) => void;
	offResume: () => void;
	offShare: () => void;
	offSocketClose: () => void;
	offSocketError: () => void;
	offSocketMessage: () => void;
	offSocketOpen: () => void;
	offTabClick: () => void;
	offTitleClick: () => void;
	on: (e: string, t: Function) => void;
	onAccelerometerChange: () => void;
	onAppPause: (any) => void;
	onAppResume: (any) => void;
	onBLECharacteristicValueChange: () => void;
	onBLEConnectionStateChanged: () => void;
	onBack: () => void;
	onBackgroundAudioPause: () => void;
	onBackgroundAudioPlay: () => void;
	onBackgroundAudioStop: () => void;
	onBluetoothAdapterStateChange: () => void;
	onBluetoothDeviceFound: () => void;
	onCompassChange: () => void;
	onNetworkChange: () => void;
	onPagePause: () => void;
	onPageResume: (callback: () => void) => void;
	onPause: () => void;
	onPullDownRefresh: (callback: () => void) => void;
	onResume: (callback: () => void) => void;
	onShare: () => void;
	onSocketClose: () => void;
	onSocketError: () => void;
	onSocketMessage: () => void;
	onSocketOpen: () => void;
	onTabClick: () => void;
	onTitleClick: () => void;
	openBluetoothAdapter: () => void;
	openInBrowser: () => void;
	openLocation: () => void;
	parseQueryString: (e: string) => any;
	pauseBackgroundAudio: () => void;
	pauseVoice: () => void;
	playBackgroundAudio: () => void;
	playVoice: () => void;
	popTo: () => void;
	popWindow: () => void;
	previewImage: () => void;
	pushBizWindow: () => void;
	pushWindow: (url: string, data?: any) => void;
	readBLECharacteristicValue: () => void;
	ready: (t: any) => void;
	redirectTo: (string) => void;
	resumeVoice: () => void;
	saveImage: () => void;
	scan: () => void;
	seekBackgroundAudio: () => void;
	sendSocketMessage: () => void;
	setNavigationBar: () => void;
	setOptionButton: () => void;
	setSessionData: () => void;
	setTabBarBadge: () => void;
	share: (any) => void;
	showActionSheet: () => void;
	showBackButton: () => void;
	showLoading: () => void;
	showNavigationBarLoading: () => void;
	showOptionButton: () => void;
	showPopMenu: () => void;
	showTabBar: () => void;
	showToast: (any) => void;
	startBizService: () => void;
	startBluetoothDevicesDiscovery: () => void;
	startRecord: () => void;
	stopBackgroundAudio: () => void;
	stopBluetoothDevicesDiscovery: () => void;
	stopRecord: () => void;
	stopVoice: () => void;
	tradePay: () => void;
	trigger: (e: string, t: any) => void;
	ua: string;
	uploadFile: () => void;
	version: string;
	vibrate: () => void;
	watchShake: () => void;
	writeBLECharacteristicValue: () => void;
	[key: string]: any;
}

declare const ap: IAp;

declare const Ali: any;

declare const AlipayJSBridge: any;


