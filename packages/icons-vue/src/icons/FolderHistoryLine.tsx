// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderHistoryLineSvg from '@airclass/icons-svg/lib/asn/FolderHistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderHistoryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderHistoryLineSvg}></AntdIcon>;
};

FolderHistoryLine.displayName = 'FolderHistoryLine';
FolderHistoryLine.inheritAttrs = false;
export default FolderHistoryLine;