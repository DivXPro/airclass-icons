// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderUserLineSvg from '@airclass/icons-svg/lib/asn/FolderUserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderUserLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderUserLineSvg}></AntdIcon>;
};

FolderUserLine.displayName = 'FolderUserLine';
FolderUserLine.inheritAttrs = false;
export default FolderUserLine;