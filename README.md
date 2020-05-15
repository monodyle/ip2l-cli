# ip2l-cli

A CLI that translate IP to location

## Install

```bash
  npm install --global ip2l
```

## Usage

```bash
ip2l --help

To start the CLI:
  ip2l

USAGE:
  ip2l [IP ADDRESS] [OPTIONS]

OPTIONS:
  -h, --help            Prints help information
  --continentCode       Two-letter continent code
  --countryCode         Two-letter country code ISO 3166-1 alpha-2
  --regionCode          Region/state short code (FIPS or ISO)
  --isp                 ISP name
  -o, --org             Organization name
  -l, --loc             Latitude and longitude
  -z, --zip             ZIP code
  -t, --timezone        City timezone
  -v, --version         Prints version information

SUB COMMANDS:
  me                    Get your IP address information
```

## License

MIT - Copyright 2020 [monodyle](https://github.com/monodyle)