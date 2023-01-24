## orchy-storage-plugin

This plugin allows you to store your data inside the `local` or `session` storage using the `orchy's eventBus`.

### Plugin configuration

The plugin accepts one attribute:
- `strategy`: it is used to configure the storage kind for your data. Actually only `local` and `session` are supported.

The plugin accepts one property:
- `eventBus`: the `orchy's eventBus` instance.

### EventBus messages

#### Retrieve data

To retrieve your data, you should send a message following this format:
```javascript
{
    label: 'orchy-storage:get',
    payload: {
        key: any;
    }
}
```

If your data is correctly retrieved, you will receive a message with the following format:
```javascript
{
    label: 'orchy-storage:get',
    payload: {
        key: any;
        value: any;
    }
}
```

#### Insert data
To insert your data, you should send a message following this format:
```javascript
{
    label: 'orchy-storage:post',
    payload: {
        key: any;
        value: any;
    }
}
```

#### Delete data
To delete your data, you should send a message following this format:
```javascript
{
    label: 'orchy-storage:delete',
    payload: {
        key: any;
    }
}
```

#### Clear all data
To clear all data, you should send a message following this format:
```javascript
{
    label: 'orchy-storage:clear',
}
```