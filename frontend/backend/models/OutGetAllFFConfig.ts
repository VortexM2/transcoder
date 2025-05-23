/* tslint:disable */
/* eslint-disable */
/**
 * live-cmaf-transcoder
 * API for the Live CMAF Transcoder
 *
 * The version of the OpenAPI document: 0.1.63
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FFConfig } from './FFConfig';
import {
    FFConfigFromJSON,
    FFConfigFromJSONTyped,
    FFConfigToJSON,
    FFConfigToJSONTyped,
} from './FFConfig';

/**
 * 
 * @export
 * @interface OutGetAllFFConfig
 */
export interface OutGetAllFFConfig {
    /**
     * 
     * @type {Array<FFConfig>}
     * @memberof OutGetAllFFConfig
     */
    configs: Array<FFConfig>;
}

/**
 * Check if a given object implements the OutGetAllFFConfig interface.
 */
export function instanceOfOutGetAllFFConfig(value: object): value is OutGetAllFFConfig {
    if (!('configs' in value) || value['configs'] === undefined) return false;
    return true;
}

export function OutGetAllFFConfigFromJSON(json: any): OutGetAllFFConfig {
    return OutGetAllFFConfigFromJSONTyped(json, false);
}

export function OutGetAllFFConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutGetAllFFConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'configs': ((json['configs'] as Array<any>).map(FFConfigFromJSON)),
    };
}

  export function OutGetAllFFConfigToJSON(json: any): OutGetAllFFConfig {
      return OutGetAllFFConfigToJSONTyped(json, false);
  }

  export function OutGetAllFFConfigToJSONTyped(value?: OutGetAllFFConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'configs': ((value['configs'] as Array<any>).map(FFConfigToJSON)),
    };
}

