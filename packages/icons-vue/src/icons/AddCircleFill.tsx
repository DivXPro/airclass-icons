// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AddCircleFillSvg from '@airclass/icons-svg/lib/asn/AddCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleFillSvg}></AntdIcon>;
};

AddCircleFill.displayName = 'AddCircleFill';
AddCircleFill.inheritAttrs = false;
export default AddCircleFill;