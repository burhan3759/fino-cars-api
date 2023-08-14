# Introduction

A simple RESTful api to get a car list by car type. 

## API Details

1. End point: `/cars`
2. Query Params: `carType`
Values: `sport | electric | 2wheels`
3. Authorization: `JWT`
4. Response

Status | Desc | Results
-|-|-
200 | Success | Empty list or list of cars
400 | Bad Request | Error details

### Response Scheme

**200**

- Cars[]: `Array of object`
  - type: `sport | electric | 2wheels`
  - parts[]: `Array of object`
    - name: `string`

**400**
- errors: `object`
  - msg: `string`

