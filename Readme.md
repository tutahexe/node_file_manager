# Assignment: File Manager

## Description

Task was to implement File Manager using Node.js APIs.

### The file manager should be able to do the following:

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files
- Compress and decompress files

### Initial launch:

```
node run start -- --username=your_username
```

### Navigation example:

```
up
```

Note: Up command won't go higher then work directory.

```
cd ./folder
```

### Read example:

```
cat filename.txt
```

### Create example:

```
add aaaa
```

### Delete example:

```
rm aaaa
```

### Move example:

```
mv filename.txt .\dest_folder
```

### Copy example:

```
cp filename.txt .\dest_folder
```

### Rename example:

```
rn empty.txt filename.txt
```

### Compress\Decompress examples:

```
compress empty.br empty.txt
decompress empty.br empty.txt
```

### OS operations:

```
os --EOL
os --cpus
os --homedir
os --username
os --architecture
```

### Hash calculation example:

```
hash empty.txt
```

### Quit

```
.exit
```

or use "ctrl+c", program will still gracefully shutdown.
