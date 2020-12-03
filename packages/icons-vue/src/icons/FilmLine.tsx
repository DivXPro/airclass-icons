// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilmLineSvg from '@airclass/icons-svg/lib/asn/FilmLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilmLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilmLineSvg}></AntdIcon>;
};

FilmLine.displayName = 'FilmLine';
FilmLine.inheritAttrs = false;
export default FilmLine;