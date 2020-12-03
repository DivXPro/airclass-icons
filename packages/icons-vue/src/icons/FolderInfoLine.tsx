// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderInfoLineSvg from '@airclass/icons-svg/lib/asn/FolderInfoLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderInfoLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderInfoLineSvg}></AntdIcon>;
};

FolderInfoLine.displayName = 'FolderInfoLine';
FolderInfoLine.inheritAttrs = false;
export default FolderInfoLine;