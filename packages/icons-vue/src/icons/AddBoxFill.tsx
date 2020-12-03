// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AddBoxFillSvg from '@airclass/icons-svg/lib/asn/AddBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddBoxFillSvg}></AntdIcon>;
};

AddBoxFill.displayName = 'AddBoxFill';
AddBoxFill.inheritAttrs = false;
export default AddBoxFill;