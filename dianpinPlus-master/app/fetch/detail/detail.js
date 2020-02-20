import { get } from '../get'

export function getDetail(id){
	const result = get('/api/detail/info/'+id)
	return result
}

export function getCommentData(page,id){
	const result = get('/api/detail/comment/'+page+'/'+id)
	return result
}