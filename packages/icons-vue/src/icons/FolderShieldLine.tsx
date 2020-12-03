// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderShieldLineSvg from '@airclass/icons-svg/lib/asn/FolderShieldLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderShieldLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderShieldLineSvg}></AntdIcon>;
};

FolderShieldLine.displayName = 'FolderShieldLine';
FolderShieldLine.inheritAttrs = false;
export default FolderShieldLine;