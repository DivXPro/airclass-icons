// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AddFillSvg from '@airclass/icons-svg/lib/asn/AddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddFillSvg}></AntdIcon>;
};

AddFill.displayName = 'AddFill';
AddFill.inheritAttrs = false;
export default AddFill;