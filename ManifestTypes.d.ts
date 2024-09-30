/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    TextVal: ComponentFramework.PropertyTypes.StringProperty;
    LanguageOptions: ComponentFramework.PropertyTypes.StringProperty;
    Language: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    TextVal?: string;
    Language?: string;
}
