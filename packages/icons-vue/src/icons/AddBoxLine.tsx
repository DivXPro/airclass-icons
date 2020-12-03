// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AddBoxLineSvg from '@airclass/icons-svg/lib/asn/AddBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddBoxLineSvg}></AntdIcon>;
};

AddBoxLine.displayName = 'AddBoxLine';
AddBoxLine.inheritAttrs = false;
export default AddBoxLine;