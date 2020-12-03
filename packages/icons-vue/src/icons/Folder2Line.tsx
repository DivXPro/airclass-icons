// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Folder2LineSvg from '@airclass/icons-svg/lib/asn/Folder2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Folder2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2LineSvg}></AntdIcon>;
};

Folder2Line.displayName = 'Folder2Line';
Folder2Line.inheritAttrs = false;
export default Folder2Line;