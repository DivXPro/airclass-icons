// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderOpenLineSvg from '@airclass/icons-svg/lib/asn/FolderOpenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenLineSvg}></AntdIcon>;
};

FolderOpenLine.displayName = 'FolderOpenLine';
FolderOpenLine.inheritAttrs = false;
export default FolderOpenLine;