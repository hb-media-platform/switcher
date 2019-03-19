export function getMetaTag(name) {
    return document.querySelector(`meta[name="${name}"]`)
}

export function createMetaTag(name, content) {
    let tag = document.createElement('META')
    tag.name = name
    tag.content = content
    document.head.appendChild(tag)
    return tag
}

export function setMeta(name, content) {
    let tag = getMetaTag(name)
    if ( tag ) {
        tag.content = content
    } else {
        createMetaTag(name, content)
    }
}