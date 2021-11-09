const { getAsin } = require("./getAsin")

test('no asin in the url return false, simple url', () => {
    expect(getAsin('www.google.com')).toBe(false);
});

test('no asin in the url return false, long url', () => {
    expect(getAsin('https://jestjs.io/docs/getting-started')).toBe(false);
});

test('there is an asin in the url return false, simple url', () => {
    expect(getAsin('https://www.amazon.com/gp/product/B0971L5G1D')).toBe('B0971L5G1D');
});

test('there is an asin in the url return false, long url', () => {
    expect(getAsin('https://www.amazon.com/dp/B099ZJKDCD/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B099ZJKDCD&pd_rd_w=PZedW&pf_rd_p=887084a2-5c34-4113-a4f8-b7947847c308&pd_rd_wg=h5QiB&pf_rd_r=DBT5E418B4WYT2FVJQXH&pd_rd_r=7cd4000e-9b27-43ef-b83a-c06f754dbaa8&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTUlZWFhOMU5MN01RJmVuY3J5cHRlZElkPUEwMzc4OTQ4QjBITzcwR1AyREhBJmVuY3J5cHRlZEFkSWQ9QTA4NDE5OTNLOVVGMjk5OUtPTTQmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'))
    .toBe('B099ZJKDCD');
});