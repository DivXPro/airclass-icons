// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AddCircleLineSvg from '@airclass/icons-svg/lib/asn/AddCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleLineSvg}></AntdIcon>;
};

AddCircleLine.displayName = 'AddCircleLine';
AddCircleLine.inheritAttrs = false;
export default AddCircleLine;