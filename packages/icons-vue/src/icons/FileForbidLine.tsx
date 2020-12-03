// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileForbidLineSvg from '@airclass/icons-svg/lib/asn/FileForbidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileForbidLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileForbidLineSvg}></AntdIcon>;
};

FileForbidLine.displayName = 'FileForbidLine';
FileForbidLine.inheritAttrs = false;
export default FileForbidLine;