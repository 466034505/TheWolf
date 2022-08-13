var b64s = "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JXp1IGZyb20gdXNlcikKACAgICBLZXJuZWwgY29tbWFuZCBsaW5lOiAlcwoAICAgIEtlcm5lbCBpbWFnZSBidWZmZXI6ICVwCgAgICAgSW5pdHJhbWZzIGJ1ZmZlcjogICAgJXAKAEZhaWxlZCB0byBhbGxvY2F0ZSBicAoARmFpbGVkIHRvIGluc3RhbGwgc2h1dGRvd24gaG9vawoAKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqCgBrZXhlYyBzdWNjZXNzZnVsbHkgYXJtZWQuIFBsZWFzZSBzaHV0IGRvd24gdGhlIHN5c3RlbS4KACoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgoKAEluc3RhbGxpbmcgc3lzX2tleGVjIHRvIHN5c3RlbSBjYWxsICMlZAoAa2V4ZWNfaW5pdCgpIHN1Y2Nlc3NmdWwKCgBrZXhlYzogV2FpdGluZyBmb3Igc2Vjb25kYXJ5IENQVXMuLi4KAGtleGVjOiBTZWNvbmRhcnkgQ1BVcyBxdWllc2NlZAoAa2V4ZWM6IFNldHRpbmcgdXAgR0RULi4uCgBrZXhlYzogUmVsb2NhdGluZyBzdHViLi4uCgBrZXhlYzogU2V0dGluZyB1cCBib290IHBhcmFtcy4uLgoAa2V4ZWM6IENsZWFuaW5nIHVwIGhhcmR3YXJlLi4uCgBrZXhlYzogUmVjb25maWd1cmluZyBWUkFNLi4uCgBrZXhlYzogUmVzZXR0aW5nIEdQVS4uLgoAa2V4ZWM6IEFib3V0IHRvIHJlbG9jYXRlIGFuZCBqdW1wIHRvIGtlcm5lbAoAa2V4ZWM6IHVucmVhY2hhYmxlICg/KQoAaG9va19pY2NfcXVlcnlfbm93YWl0IGNhbGxlZAoAQUNQSSB0YWJsZXMgZml4ZWQKAGhvb2tfaWNjX3F1ZXJ5X25vd2FpdDogdW5yZWFjaGFibGUgKD8pCgBOT1AgaGFuZGxlciBhdCAweCV4CgAwNzA3MDEAQ29weWluZyAlcyBmaXJtd2FyZQoAY29weV9maXJtd2FyZTogJXM6IGV4cGVjdGVkIHNpemUgJWQsIGdvdCAlZAoAbGl2ZXJwb29sAGdsYWRpdXMAZmlybXdhcmVfZXh0cmFjdDogQ291bGQgbm90IGxvY2F0ZSBmaXJtd2FyZSB0YWJsZQBrZXkAa2V5L2VhcF9oZGRfa2V5LmJpbgBsaWIAbGliL2Zpcm13YXJlAGxpYi9maXJtd2FyZS9lZGlkAGxpYi9maXJtd2FyZS9lZGlkL215X2VkaWQuYmluAGFtZGdwdQBsaWIvZmlybXdhcmUvJXMvACVzJXNfcGZwLmJpbgBmaXJtd2FyZV9leHRyYWN0OiBFeHRyYWN0ICVzIAoAUEZQACVzJXNfbWUuYmluAE1FACVzJXNfY2UuYmluAENFACVzJXNfbWVjLmJpbgBNRUMAJXMlc19tZWMyLmJpbgBNRUMyACVzJXNfcmxjLmJpbgBSTEMAJXMlc19zZG1hLmJpbgBTRE1BAFRSQUlMRVIhISEAJXMlc19zZG1hMS5iaW4AU0RNQTEAZmlybXdhcmVfZXh0cmFjdDogb3ZlcmZsb3chICVkID4gJWQKAEZpeGluZyBBQ1BJIHRhYmxlcyBhdCAweCVsbHggKCVwKQoAUlNEVCBhdCAweCV4CgBYU0RUIGF0IDB4JWxseAoAJWMlYyVjJWMgYXQgMHgleAoARkFDUyBhdCAweCV4CgBEU0RUIGF0IDB4JXgKAEVSUk9SOiBubyBGQURUIHlldD8KAEYwRiAgIABQUzRLRVhFQwBLRVhDAGtlcm5lbF9ob29rX2luc3RhbGwoJXAsICVwKQoACj09PT09PT09PT09PT09PT09PT09PSBXQVJOSU5HID09PT09PT09PT09PT09PT09PT09PQoAaG9vayB0YXJnZXQgZnVuY3Rpb24gYWRkcmVzczogJXAKAEl0IGxvb2tzIGxpa2Ugd2UncmUgcnVubmluZyBmcm9tIHVzZXJsYW5kIG1lbW9yeS4KAFBsZWFzZSBydW4gdGhpcyBjb2RlIGZyb20gYSBrZXJuZWwgbWVtb3J5IG1hcHBpbmcuCgoAICBVc2luZyA2NGJpdCBhYnNvbHV0ZSBqdW1wCgBwbWFwX3Byb3RlY3QocG1hcCwgJXAsICVwLCAlZCkKAGtlcm5lbF9pbml0KCkKAEtlcm5lbCBiYXNlIGlzIG5vdCBhbGlnbmVkCgBLZXJuZWwgYmFzZSA9ICVsbHgKAERpcmVjdCBtYXAg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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAFNjZVN5c0NvcmVSZWJvb3QAAAAAAAAAL3N5c3RlbS9jb21tb24vbGliL2xpYlNjZVN5c1V0aWwuc3ByeAAAAHNjZVN5c1V0aWxTZW5kU3lzdGVtTm90aWZpY2F0aW9uV2l0aFRleHQAAAAAAAAAAE9yaW5nYWwgcGF5bG9hZCBieSBAc2xlaXJzZ29ldnkKQ29tcGlsZWQgYnkgQE5hemt5WVQAL21udC91c2IwL2J6SW1hZ2UAL21udC91c2IxL2J6SW1hZ2UAL3VzZXIvc3lzdGVtL2Jvb3QvYnpJbWFnZQAAAAAAAEZhaWxlZCB0byBsb2FkIGZpbGU6IGJ6SW1hZ2UuClBhdGhzIGNoZWNrZWQ6Ci9tbnQvdXNiMC9iekltYWdlCi9tbnQvdXNiMS9iekltYWdlCi91c2VyL3N5c3RlbS9ib290L2J6SW1hZ2UAL21udC91c2IwL2luaXRyYW1mcy5jcGlvLmd6AC9tbnQvdXNiMS9pbml0cmFtZnMuY3Bpby5negAAAAAAAC91c2VyL3N5c3RlbS9ib290L2luaXRyYW1mcy5jcGlvLmd6AAAAAABGYWlsZWQgdG8gbG9hZCBmaWxlOiBpbml0cmFtZnMuY3Bpby5nei4KUGF0aHMgY2hlY2tlZDoKL21udC91c2IwL2luaXRyYW1mcy5jcGlvLmd6Ci9tbnQvdXNiMS9pbml0cmFtZnMuY3Bpby5negovdXNlci9zeXN0ZW0vYm9vdC9pbml0cmFtZnMuY3Bpby5negAvbW50L3VzYjAvYm9vdGFyZ3MudHh0AC9tbnQvdXNiMS9ib290YXJncy50eHQAAAAAAAAAAC91c2VyL3N5c3RlbS9ib290L2Jvb3RhcmdzLnR4dAAARmFpbGVkIHRvIGxvYWQgZmlsZTogYm9vdGFyZ3MudHh0LgpQYXRocyBjaGVja2VkOgovbW50L3VzYjAvYm9vdGFyZ3MudHh0Ci9tbnQvdXNiMS9ib290YXJncy50eHQKL3VzZXIvc3lzdGVtL2Jvb3QvYm9vdGFyZ3MudHh0AGJvb3RhcmdzLnR4dCBpcyBvcHRpb25hbC4AAAAAAAAAAHBhbmljPTAgY2xvY2tzb3VyY2U9dHNjIHJhZGVvbi5kcG09MCBjb25zb2xlPXR0eTAgY29uc29sZT10dHlTMCwxMTUyMDBuOCBjb25zb2xlPXVhcnQ4MjUwLG1taW8zMiwweGQwMzQwMDAwIHZpZGVvPUhETUktQS0xOjE5MjB4MTA4MC0yNEA2MCBjb25zb2xlYmxhbms9MCBuZXQuaWZuYW1lcz0wIGRybS5kZWJ1Zz0wAC9tbnQvdXNiMC92cmFtLnR4dAAvbW50L3VzYjEvdnJhbS50eHQAL3VzZXIvc3lzdGVtL2Jvb3QvdnJhbS50eHQAAAAARmFpbGVkIHRvIGxvYWQgZmlsZTogdnJhbS50eHQuClBhdGhzIGNoZWNrZWQ6Ci9tbnQvdXNiMC92cmFtLnR4dAovbW50L3VzYjEvdnJhbS50eHQKL3VzZXIvc3lzdGVtL2Jvb3QvdnJhbS50eHQAdnJhbS50eHQgaXMgb3B0aW9uYWwuAA==";
var Base64Binary = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	decodeArrayBuffer: function(input) {
		var bytes = (input.length/4) * 3;
		var ab = new ArrayBuffer(bytes);
		return this.decode(input, ab);
	},
	removePaddingChars: function(input){
		var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
		if(lkey == 64){
			return input.substring(0,input.length - 1);
		}
		return input;
	},
	decode: function (input, arrayBuffer) {
		input = this.removePaddingChars(input);
		input = this.removePaddingChars(input);
		var bytes = parseInt((input.length / 4) * 3, 10);
		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;
		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		for (i=0; i<bytes; i+=3) {	
			enc1 = this._keyStr.indexOf(input.charAt(j++));
			enc2 = this._keyStr.indexOf(input.charAt(j++));
			enc3 = this._keyStr.indexOf(input.charAt(j++));
			enc4 = this._keyStr.indexOf(input.charAt(j++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			uarray[i] = chr1;			
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}
		return uarray;	
	}
}
function write_payload(payload_writer)
{
	var ua = Base64Binary.decode(b64s);
	var i;
	for (i = 0; i < ua.length; i++) {
		payload_writer[i] = ua[i];
	}
}