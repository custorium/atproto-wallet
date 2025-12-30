# Custorium ATProto wallet

This is very much a work in progress

## Specs

This wallet implements

- [OpenID for Verifiable Credential Issuance - draft 13](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-13.html)
- [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)



Functionality to implement

- Generate and store rotation keys in hardware keystore ( Strongbox for Android and Secure enclave for iOS )
- Import and store rotation key by scanning a QR code
- Login to an ATProto app by scanning a QR code or clicking a link on the same device and selecting an account ( PDS )


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) + [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template).
