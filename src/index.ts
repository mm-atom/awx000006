export default function add_phone_contact(options: wx.PhoneContact) {
	return new Promise<boolean>((resolve, reject) => {
		wx.addPhoneContact({
			...options,
			success() {
				resolve(true);	// 需要判断一下返回值，用户取消|调用失败
			},
			fail() {
				reject(false);
			}
		});
	});
}
