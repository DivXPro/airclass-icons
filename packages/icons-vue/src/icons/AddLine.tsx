// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AddLineSvg from '@airclass/icons-svg/lib/asn/AddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddLineSvg}></AntdIcon>;
};

AddLine.displayName = 'AddLine';
AddLine.inheritAttrs = false;
export default AddLine;