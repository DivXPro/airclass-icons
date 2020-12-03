// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderUnknowLineSvg from '@airclass/icons-svg/lib/asn/FolderUnknowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderUnknowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderUnknowLineSvg}></AntdIcon>;
};

FolderUnknowLine.displayName = 'FolderUnknowLine';
FolderUnknowLine.inheritAttrs = false;
export default FolderUnknowLine;