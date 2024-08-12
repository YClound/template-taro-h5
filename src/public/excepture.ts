import SlsTracker from '@aliyun-sls/web-track-browser';
import { getPlatform, isInAlipay } from './util';
import cst from './constant';

const tracker = new SlsTracker({
	host: 'cn-hangzhou.log.aliyuncs.com',
	project: 'laiy-log-collect',
	logstore: 'frontend_error_log',
	time: 2,
	count: 5,
});

export function capture(e: any = {}, type = 'syntax') {
	try {
		let captureType = type;
		const datetime = +new Date();
		const url = location.pathname || '/';
		const msg = typeof e === 'string' ? e : e.msg || e.message || (e.reason ? e.reason.msg || e.reason.message : '');
		const params: any = {};

		if (!msg || (e && e.reason && e.reason.code && !e.reason.success && e.reason.name !== 'AxiosError')) {
			return;
		}

		if (type === 'request' && ['Network Error',].includes(msg)) {
			return;
		}

		if (type === 'request') {
			params.request = e ? e.request : '';
			params.response = e ? e.response : '';
		}

		if (e && e.reason && e.reason.name === "AxiosError") {
			const { response = {} } = e.reason || {};
			const { config = {}, data = {} } = response || {};
			params.request = JSON.stringify(data);
			params.response = JSON.stringify({ url: config.url, data: config.data });
			captureType = 'request';
		}

		if (cst.NODE_ENV !== 'development' && ((ap && ap.isAlipay) || isInAlipay())) {
			tracker.send({
				type: captureType,
				datetime,
				sender: 'app',
				projectVersion: cst.projectVersion,
				url: url,
				model: navigator.userAgent,
				platform: getPlatform(),
				captureId: cst.SESSION_ID,
				sessionId: cst.SESSION_ID,
				appKey: cst.APP_KEY,
				userId: cst.USER && cst.USER.userId,
				msg,
				...params,
			});
		} else {
			console.error(
				'%c错误上报',
				'color:#fff;font-weight:bold;background:#bbb;padding:2px;',
				e,
			);
		}
	} catch (error) {
		console.error(error)
	}
}
