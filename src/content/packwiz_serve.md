## packwiz serve

Run a local development server

### Synopsis

Run a local HTTP server for development, automatically refreshing the index when it is queried

```
packwiz serve [flags]
```

### Options

```
      --basic      Disable refreshing and allow all files in the directory, rather than just files listed in the index
  -h, --help       help for serve
  -p, --port int   The port to run the server on (default 8080)
  -r, --refresh    Automatically refresh the index file (default true)
```

### Options inherited from parent commands

```
      --config string        The config file to use (default "/Users/calebjasik/Library/Application Support/packwiz/.packwiz.toml")
      --mods-folder string   The default folder to store mod metadata files in (default "mods")
      --pack-file string     The modpack metadata file to use (default "pack.toml")
```
